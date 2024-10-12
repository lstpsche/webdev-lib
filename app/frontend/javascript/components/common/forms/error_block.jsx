function ErrorBlock({ errorMessage }) {
  return(
    <div className="text-red-700 text-xs font-mono font-thin text-center w-full h-4" role="alert">
      { errorMessage }
    </div>
  );
}

export default ErrorBlock;
