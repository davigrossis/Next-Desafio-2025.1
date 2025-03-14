import CardPopular from "./cardPopular";

export default function Popular () {
    return(
        <div className="w-full flex flex-col bg-bg2">
            <div className="w-10/12 mx-auto py-12">
                 <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasddasdasdasdasdasdasddasdsaasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />   
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                    <CardPopular link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png" />
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl pt-10 pb-10 font-extrabold">
                        Alguns dos produtos mais vendidos da nossa loja
                    </h1>
                </div>
            </div>
           
        </div>
    )
}

