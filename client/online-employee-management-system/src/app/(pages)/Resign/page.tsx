import PageHeader from "@/components/PageHeader/page-header.component";

export default function Resign() {
    return (
        <div className="font-times">
            <PageHeader title="Resign" />
            <div className="text-3xl text-red-500 bg-slate-200 p-3 rounded-lg">Danger Zone</div>
            <div className="text-lg text-red-600"><span>Give Resign</span></div>
        </div>
    );
}