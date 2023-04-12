const LoadingScreen = () => {
    return (
        <div className="flex-grow-1 d-flex align_items-center justify-content-center">
            <div
                className="spinner-border"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
