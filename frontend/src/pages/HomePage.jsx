import AppLayout from "../layouts/AppLayout";
import Menu from "../components/ActionMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <AppLayout
            header={Header}
            footer={Footer}
            mainContent={Menu}
        >
        </AppLayout>
    );
}
