export default function LoadingSpinner() {
    return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}