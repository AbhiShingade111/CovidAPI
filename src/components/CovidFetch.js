import { Stack, Typography } from "@mui/material";
import Covid from "./Header";

export default function CovidFetch(props) {

    const latestData = props.datacovid

    return (
        <div style={{marginTop: "80px"}}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ m: 2 }}
            >
                <div className="bg-yellow-300 w-96 text-center">
                    <Typography className="p-2 text-black"><span className="text-lg font-bold">Total Case</span></Typography>
                    <Typography className="text-red-700">{latestData?.data?.summary?.total}</Typography>
                </div>
                <div className="bg-yellow-300 w-96 text-center ">
                    <Typography className="p-2 text-black"><span className="text-lg font-bold">Confirmed</span></Typography>
                    <Typography className="text-red-700">{latestData?.data?.summary?.confirmedCasesIndian}</Typography>
                </div>
                <div className="bg-yellow-300 w-96 text-center ">
                    <Typography className="p-2 text-black"><span className="text-lg font-bold">Deaths</span></Typography>
                    <Typography className="text-red-700">{latestData?.data?.summary?.deaths}</Typography></div>
                <div className="bg-yellow-300 w-96 text-center ">
                    <Typography className="p-2 text-black"><span className="text-lg font-bold">Recovered</span></Typography>
                    <Typography className="text-red-700">{latestData?.data?.summary?.discharged}</Typography>
                </div>
            </Stack>
            <Covid />
        </div>
    );
}
