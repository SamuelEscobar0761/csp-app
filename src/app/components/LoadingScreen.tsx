const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingScreen;
