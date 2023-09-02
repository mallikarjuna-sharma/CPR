import { Grid, Box, Button, Typography, Tooltip, ImageList, ImageListItem } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import Image from "next/image";
import Data from './projectData'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    '&:nth-of-type(odd)': {
        borderRight: '0.5px solid !important',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export default function ProductpageDetails(props) {

    const [projectData, setselectedprojectData] = useState(Data?.projectDetails[0]);

    useEffect(() => {
        let data = Data?.projectDetails.filter(el => el.ProjectName === props.projectName);
        setselectedprojectData(data[0])
    }, [])
    
    return (
        <Grid container flexDirection={"row"} spacing={5}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='projectDetailMainContent'>
            <Grid container xs={12} sm={12} md={6} lg={6} style={{ "padding": "0 60px" }} className='projectDetailFirstSec'>
                <Grid container spacing={2} width='100%'>
                    {projectData?.source?.map((ele, index, array) => {
                        let count = (array.length == 4 ? 6 : array.length == 3 && (index == 1 || index == 2)) ? 6 : 12;
                        return (
                            <Grid item xs={12} sm={6} md={count}>
                                <Image
                                    src={ele}
                                    alt="project images"
                                    style={{
                                        width: "100%",
                                        height: 300,
                                    }}
                                />
                            </Grid>)
                    })}
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={6} lg={6} className='projectDetailSecondSec' >
                <div>
                    <h2 className="projectDetailHeaders"> BRIEF DESCRIPTION</h2>
                    <p className="projectDetailDescription">
                     {projectData?.Description}
                    </p>
                </div>
                <div>
                    <h2 className="projectDetailHeaders"> AT A GLANCE</h2>
                    <TableContainer component={Paper} className="projectDetailTable">
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableBody>
                                {Data?.tableHeaders?.map((ele, index, array) => {
                                    return (
                                        <StyledTableRow>
                                            <StyledTableCell align="right">{ele}</StyledTableCell>
                                            <StyledTableCell>{projectData[ele]}</StyledTableCell>
                                        </StyledTableRow>)
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </Grid>
    );
}
