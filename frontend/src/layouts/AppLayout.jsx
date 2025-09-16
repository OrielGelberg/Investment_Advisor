

export default function AppLayout({ header, footer, mainContent }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header>
                {header}
            </header>

            <main className="flex-1 p-6">
                {mainContent}
            </main>

            <footer className="bg-gray-200 text-center p-4 text-sm">
                {footer}
            </footer>
        </div>
    );
}
