import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Marketo. - Admin",
    description: "Marketo. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
