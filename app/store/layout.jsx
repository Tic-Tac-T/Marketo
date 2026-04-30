import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Marketo. - Store Dashboard",
    description: "Marketo. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
