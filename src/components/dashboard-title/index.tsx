type DashboardTitleProps = {
    title:string;
    description: string;
}

export default function DashboardTitle ({title, description}: DashboardTitleProps) {
    return(
        <div>
            <h1 className="text-4xl font-mont text-cyan-200 font-bold mb-2">
                {title}
            </h1>
            <span>{description}</span>
        </div>
    )
}