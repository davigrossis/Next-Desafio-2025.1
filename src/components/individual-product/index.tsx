import Image from "next/image";

export default function IndividualPost() {
    return(
        <div className="w-full flex flex-col my-auto lg:grid lg:grid-cols-8 gap-8">
            <div className="lg:col-span-4">
                <Image
                src={'/funko.png'}
                alt="Placeholder"
                width={1920}
                height={1080}
                className="lg:h-[700px] object-cover aspect-video w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 font-bold w-full border-b ">
                    <h1 className="font-mont text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        Placeholder
                    </h1>
                </div>
                <div className="flex gap-2 items-start">
                    <span className="pt-[0.2rem]">R$</span>
                    <span className="font-mont font-bold text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl">150,0</span>
                </div>
                
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate metus sit amet nisl sagittis tempor. 
                    Etiam rutrum egestas metus in sagittis. Maecenas laoreet mauris eu diam convallis, sit amet bibendum eros auctor. In accumsan ac m
                    agna ut sodales. Mauris fringilla metus nec dui tempus ullamcorper ac ut lorem. Suspendisse sit amet augue lobortis, tristique nul
                    la sit amet, finibus leo. Ut efficitur vulputate lectus, tincidunt pharetra metus congue et.
                    Nulla ultricies congue est, sit amet iaculis sem eleifend at. Nullam pretium enim hendrerit suscipit rhoncus. Vivamus ef
                    ficitur dapibus turpis et mollis. Sed scelerisque neque risus, at congue turpis maximus quis. Etiam feugiat cursus dui, vel lob
                    ortis elit ornare sed. Suspendisse maximus eleifend enim id ullamcorper. Nulla sit amet viverra lorem, id porta tellus. Nam ve  
                    l hendrerit lorem. In hac habitasse platea dictumst. Proin lacinia vehicula urna vel viverra. Nulla eget finibus magna, vulputate rutrum dolor.
                </p>
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify">
                    Sed sed nulla sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam semper, odio sit amet fringilla rutrum,
                    purus magna egestas lacus, et elementum lacus justo eget quam. Fusce eleifend laoreet risus, vitae commodo lectus lobortis ac. Donec to
                    rtor nunc, gravida quis facilisis at, bibendum at arcu. Nullam vehicula tempor ligula, ut interdum lectus dignissim sit amet. Morbi i
                    n justo vulputate, convallis risus nec, cursus metus. Vivamus porta bibendum commodo. Praesent sagittis turpis vitae lorem varius, sit
                    amet placerat massa accumsan. Curabitur tristique at justo a maximus.Curabitur ultrices fermentum ex id vestibulum. Maecenas auctor 
                    ultrices leo, sit amet dapibus arcu malesuada sed.
                </p>
            </div>
        </div>
    )
}