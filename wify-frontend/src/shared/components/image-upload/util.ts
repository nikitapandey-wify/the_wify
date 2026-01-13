import { PixelCrop } from 'react-image-crop';

export async function getCroppedImg(
	image: HTMLImageElement,
	crop: PixelCrop
): Promise<Blob | null> {
	const canvas = document.createElement('canvas');
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = Math.floor(crop.width * scaleX);
	canvas.height = Math.floor(crop.height * scaleY);
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		throw new Error('No 2d context');
	}

	const pixelRatio = window.devicePixelRatio || 1;
	canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
	canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
	ctx.scale(pixelRatio, pixelRatio);
	ctx.imageSmoothingQuality = 'high';

	const cropX = crop.x * scaleX;
	const cropY = crop.y * scaleY;

	const centerX = image.naturalWidth / 2;
	const centerY = image.naturalHeight / 2;

	ctx.save();

	// Move the crop area to the center of the canvas
	ctx.translate(-cropX, -cropY);
	// Move the origin to the center of the original image
	ctx.translate(centerX, centerY);
	// Rotate around the center
	// ctx.rotate(rotate * Math.PI / 180) // Uncomment if rotation is needed
	// Move the origin back and draw the image
	ctx.translate(-centerX, -centerY);
	ctx.drawImage(
		image,
		0,
		0,
		image.naturalWidth,
		image.naturalHeight,
		0,
		0,
		image.naturalWidth,
		image.naturalHeight
	);

	ctx.restore();

	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (!blob) {
				console.error('Canvas is empty');
				reject(new Error('Canvas is empty'));
				return;
			}
			resolve(blob);
		}, 'image/png'); // Specify PNG format for transparency
	});
}