import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AdminContent from "../components/AdminContent/AdminContent";

const AdminPanel = () => {
    return (
        <>
            <Header/>
            <div className={"admin-panel"}>
                <div className={"page-wrapper"}>
                    <div className={"admin-panel__inner"}>
                        <AdminContent />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;