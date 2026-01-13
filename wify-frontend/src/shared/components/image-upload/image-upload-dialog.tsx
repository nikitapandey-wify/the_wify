'use client';

import { Repeat2, Trash2, Upload, X } from 'lucide-react';
// Imports for react-image-crop
import ReactCrop, {
	type Crop as CropType,
	type PixelCrop,
	centerCrop,
	makeAspectCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { useRef, useState } from 'react';

import { Button } from '@/shared/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/components/ui/dialog';

import { cn } from '@/shared/utils/utils';

import { getCroppedImg } from './util';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

interface Props {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onImageUpload: (file: File) => Promise<void>;
	currentImageUrl?: string;
	aspectRatio?: number;
	onImageRemove?: () => Promise<void>;
}
export function ImageUploadDialog({
	open,
	onOpenChange,
	onImageUpload,
	currentImageUrl,
	aspectRatio = 1,
	onImageRemove,
}: Props) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const [crop, setCrop] = useState<CropType>();
	const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

	// Function to center the crop on image load
	function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
		const { width, height } = e.currentTarget;
		const newCrop = centerCrop(
			makeAspectCrop(
				{
					// You don't need to pass a complete crop into makeAspectCrop or centerCrop.
					unit: '%',

					width: 100, // Full width
				},
				aspectRatio, // Use the passed aspect ratio
				width,
				height
			),
			width,
			height
		);
		setCrop(newCrop);
	}

	const resetState = () => {
		setSelectedImage(null);
		setSelectedFile(null);
		setError(null);
		setCrop(undefined);
		setCompletedCrop(undefined);
		if (imgRef.current) {
			imgRef.current.src = ''; // Clear image ref source
		}
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const handleClose = () => {
		resetState();
		onOpenChange(false);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		processFile(file);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files?.[0];
		processFile(file);
	};

	const processFile = (file?: File) => {
		setError(null);
		setCrop(undefined); // Reset crop on new file select/drop

		if (!file) return;

		// Validate file type - only allow JPEG and PNG
		if (!['image/jpeg', 'image/png'].includes(file.type)) {
			setError('Please upload a JPEG or PNG image file');
			return;
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			setError('Image size should be less than 5MB');
			return;
		}

		setSelectedFile(file); // Store the original file

		try {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		} catch (err) {
			setError('Failed to load image. Please try again.');
			console.error('Error loading image:', err);
		}
	};

	const handleSave = async () => {
		// Ensure we have an image ref, a completed crop, and an original file
		if (!imgRef.current || !completedCrop || !selectedFile) {
			setError('Please select an image and crop area.');
			return;
		}

		// Check if crop dimensions are valid
		if (completedCrop.width === 0 || completedCrop.height === 0) {
			setError('Invalid crop area. Please select a valid area to crop.');
			return;
		}

		try {
			setIsLoading(true);
			const croppedImageBlob = await getCroppedImg(imgRef.current, completedCrop);

			if (!croppedImageBlob) {
				setError('Failed to crop image. Please try again.');
				setIsLoading(false);
				return;
			}

			// Create a File object from the blob
			const croppedFile = new File([croppedImageBlob], selectedFile.name, {
				type: 'image/png', // Always save cropped as PNG
				lastModified: Date.now(),
			});

			await onImageUpload(croppedFile); // Pass the cropped file
			handleClose();
		} catch (err: unknown) {
			const errorMessage =
				err &&
				typeof err === 'object' &&
				'response' in err &&
				err.response &&
				typeof err.response === 'object' &&
				'data' in err.response &&
				err.response.data &&
				typeof err.response.data === 'object' &&
				'message' in err.response.data
					? err.response.data.message
					: err instanceof Error
						? err.message
						: 'Failed to save image. Please try again.';
			setError(errorMessage as string);
			console.error('Error saving cropped image:', err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={handleClose}
		>
			<DialogContent className="max-w-full overflow-hidden bg-background sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle className="text-xl">Upload Image</DialogTitle>
				</DialogHeader>

				<div>
					{selectedImage ? (
						<div className="flex flex-col items-center gap-4">
							<p className="text-center text-sm text-muted-foreground">
								Adjust the crop area below.
							</p>
							<ReactCrop
								crop={crop}
								onChange={(_, percentCrop) => setCrop(percentCrop)}
								onComplete={(c) => setCompletedCrop(c)}
								aspect={aspectRatio}
								className="max-h-[400px] rounded-md border"
								renderSelectionAddon={() => null}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									ref={imgRef}
									alt="Crop preview"
									src={selectedImage}
									onLoad={onImageLoad}
									className="max-h-[400px]"
									style={{ objectFit: 'contain' }}
								/>
							</ReactCrop>
						</div>
					) : (
						<div
							className={cn(
								'mx-auto aspect-square max-h-[400px] w-full max-w-full',
								'rounded-xl border-2 border-dashed',
								'flex flex-col items-center justify-center gap-4',
								'bg-muted/10 transition-colors hover:bg-muted/20',
								'group relative cursor-pointer',
								error && 'border-destructive'
							)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									fileInputRef.current?.click();
								}
							}}
							onClick={() => fileInputRef.current?.click()}
							onDragOver={handleDragOver}
							onDrop={handleDrop}
							role="button"
							tabIndex={0}
							aria-label="Upload image"
						>
							<div
								className={cn(
									'flex flex-col items-center gap-3',
									'text-muted-foreground group-hover:text-foreground/90',
									'transition-all duration-200'
								)}
							>
								<div className="rounded-full bg-primary/5 p-3 transition-colors group-hover:bg-primary/10">
									<Upload className="h-6 w-6" />
								</div>
								<div className="space-y-1 text-center">
									<p className="text-sm font-medium">Click to upload</p>
									<p className="text-xs text-muted-foreground">JPEG or PNG, max 5MB</p>
									<p className="text-xs text-muted-foreground">Or drop files here</p>
								</div>
							</div>
						</div>
					)}
					<input
						ref={fileInputRef}
						type="file"
						accept="image/jpeg,image/png"
						onChange={handleFileChange}
						className="hidden"
					/>

					{error && (
						<div className="mx-auto mt-3 flex w-full max-w-[400px] items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
							<X className="h-3 w-3 flex-shrink-0" />
							<span>{error}</span>
						</div>
					)}
				</div>

				<div className="flex justify-between gap-3">
					<div className="flex gap-2">
						{selectedImage && (
							<Button
								variant="outline"
								onClick={() => fileInputRef.current?.click()}
								className="text-muted-foreground"
							>
								<Repeat2 className="mr-1 h-4 w-4" />
								Change
							</Button>
						)}
						{currentImageUrl && onImageRemove && (
							<Button
								variant="outline"
								onClick={async () => {
									await onImageRemove();
									handleClose();
								}}
								className="text-muted-foreground"
							>
								<Trash2 className="mr-1 h-4 w-4" />
								Remove
							</Button>
						)}
					</div>
					<div className="flex gap-3">
						<Button
							variant="outline"
							onClick={handleClose}
							disabled={isLoading}
						>
							Cancel
						</Button>
						<Button
							onClick={handleSave}
							disabled={!selectedImage || !completedCrop || isLoading}
						>
							{isLoading ? 'Uploading...' : 'Upload'}
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}