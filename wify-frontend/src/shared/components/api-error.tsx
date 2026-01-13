"use client";

function ApiError({ status }: { status?: number }) {
  if (status === 401) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-2 text-xl font-semibold text-gray-900">
          Access restricted
        </h1>
        <p className="text-center text-sm text-gray-600">
          You don’t have permission to manage this form. Meanwhile,
          <br /> you can still view and fill the form as an applicant.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-2 text-xl font-semibold text-gray-900">
        Something went wrong
      </h1>
      <p className="text-center text-sm text-gray-600">
        {
          "We couldn't fetch the data. Please check your connection and try again later."
        }
      </p>
    </div>
  );
}

export default ApiError;