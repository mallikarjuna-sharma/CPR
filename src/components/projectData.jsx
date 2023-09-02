import img1 from "../assests/service1.jpg";
import img2 from "../assests/service2.jpg";
import img3 from "../assests/service3.jpg";
import img4 from "../assests/service4.jpg";
import s1 from "../assests/s1.jpg";
import s2 from "../assests/s2.jpg";
import s3 from "../assests/s3.jpg";
import s4 from "../assests/s4.jpg";
import s5 from "../assests/s5.jpg";
import s6 from "../assests/s6.jpg";
import s7 from "../assests/s7.jpg";
import s8 from "../assests/s8.jpg";
import s9 from "../assests/s9.jpg";

const tableHeaders = [
    "Project Type",
    "Client",
    "Completion Date",
    "Project Size",
    "Contract Value",
];

const projectDetails = [
    {
        ProjectName: "SNUS SDE-2",
        Category: "Solar",
        "Project Type": "SNUS SDE-2",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img4, img2, img3]
    },
    {
        ProjectName: "NUS SDE-4",
        Category: "Solar",
        "Project Type": "NUS SDE-4",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img4, img2, img3]
    },
    {
        ProjectName: "NCID",
        Category: "Solar",
        "Project Type": "NCID",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img4, img2, img3, img1]
    },
    {
        ProjectName: "Southbeach Mixed Devpt",
        Category: "Building",
        "Project Type": "Southbeach Mixed Devpt",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img2, img3]
    },
    {
        ProjectName: "Tanjong Pagar Mixed Devpt",
        Category: "Building",
        "Project Type": "Tanjong Pagar Mixed Devpt",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img2, img3, img1]
    },
    {
        ProjectName: "MediaCorp Project",
        Category: "Building",
        "Project Type": "SMediaCorp Project",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img2, img3]
    },
    {
        ProjectName: "Cantilever & Tower Scaffolds",
        Category: "Architecture",
        "Project Type": "Cantilever & Tower Scaffolds",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img2, img3, img1]
    },
    {
        ProjectName: "Nuform system",
        Category: "Architecture",
        "Project Type": "Nuform system",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img2, img3]
    },
    {
        ProjectName: "Southbeach Management",
        Category: "Management",
        "Project Type": "Southbeach Management",
        Client: "Mun Siong",
        "Completion Date": "August 2008",
        "Project Size": "3350 Square Feet",
        "Contract Value": "$10,250,000",
        Description: "Scaffolding is an essential component of any domestic building project. It is required for roofing, home extensions, loft conversions, and many other structural home improvements. We provide professional advice, planning, and design for the scaffolding required for any domestic home development.Renovate has proven results for setting exceptional standards in cost control, planning, scheduling and project safety.",
        source: [img4, img2, img3, img1]
    },
];

const projectTiles = [
    "All",
    "Solar",
    "Architecture",
    "Building",
    "Management",
];

const projectDetail1 = [
    { ProjectName: "SNUS SDE-2", Category: "Solar", source: s1 },
    { ProjectName: "NUS SDE-4", Category: "Solar", source: s2 },
    { ProjectName: "NCID", Category: "Solar", source: s3 },

    { ProjectName: "Southbeach Mixed Devpt", Category: "Building", source: s4 },
    { ProjectName: "Tanjong Pagar Mixed Devpt", Category: "Building", source: s5 },
    { ProjectName: "MediaCorp Project", Category: "Building", source: s6 },

    { ProjectName: "Cantilever" + " & " + "Tower Scaffolds", Category: "Architecture", source: s7 },
    { ProjectName: "Nuform system", Category: "Architecture", source: s8 },
    { ProjectName: "Southbeach Management", Category: "Management", source: s9 },
];


const Data = { tableHeaders, projectDetails, projectTiles, projectDetail1 };
export default Data; 