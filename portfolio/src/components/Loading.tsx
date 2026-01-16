

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-cyber-black z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-cyber-green border-t-transparent rounded-full animate-spin"></div>
                <p className="text-cyber-green font-mono text-xl animate-pulse">INITIALIZING...</p>
            </div>
        </div>
    );
};

export default Loading;
