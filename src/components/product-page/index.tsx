import Link from "next/link";
import Search from "../search";
import CardProduct from "./cardProduct";

export default function ProductPage () {
    const count = 0;
    return(

        <div className="w-full space-y-12 justify-items-center">
            <Search count={count}/>
            {count != 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-extrabold">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-black/70">
                        Tente procurar por outra coisa, ou explore <Link href={"/produtos"}></Link>
                    </span>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-12">
                    <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                </div>
            )}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
                <CardProduct link="/produto/1" value={199.99} title="Funko pop ddasdasdasaasdasdasdas" image="/funko.png"></CardProduct>
            </div>
        </div>
    )
}