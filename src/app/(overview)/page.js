import Offercard from "@/components/offercard";

const getData = async () => {
    const apiURL = process.env.API_URL
    try {
        const res = await fetch(`${apiURL}/api/offeru`, {
            method: "GET",
            cache: "no-store"
        })
        if (!res.ok) {
            console.log("Błąd pobierania danych")
            return []
        }
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return []
    }
}
export default async function Home() {
    const data = await getData()
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="w-full max-w-[1100px]">
                <div className="flex justify-between w-full items-end py-2 border-[#27272a] md:px-0 px-1">
                    <div>
                    <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-3 font-['Tw_Cen_MT_Condensed']">KONSTRUKCJE</h1>
                    </div>
                    <div>
                        <p className="font-['Tw_Cen_MT_Condensed'] sm:text-3xl text-2xl">ilość {data.length}</p>
                    </div>
                </div>
                {data.length > 0 ? (
                <div className="grid grid-cols-1 gap-2 m-2">
                    {data.map(item => <Offercard key={item.id} data={item}/>)}
                </div>
                ) : (
                    <div className="w-full">
                        <p className="text-center font-['Tw_Cen_MT_Condensed'] text-3xl">Brak ofert do wyświetlenia</p>
                    </div>
                )}
            </div>

        </main>
    );
}