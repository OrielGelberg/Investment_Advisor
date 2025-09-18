import Header from "../components/Header";
import Footer from "../components/Footer";

const defaultHeader = Header;
const defaultFooter = Footer

export default function AppLayout({ header=defaultHeader, footer=defaultFooter, mainContent }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header>
                {<header/>}
            </Header>

            <main className="flex-1 p-6">
                {<mainContent/>}
            </main>

            <footer className="bg-gray-200 text-center p-4 text-sm">
                {<footer/>}
            </footer>
        </div>
    );
}
