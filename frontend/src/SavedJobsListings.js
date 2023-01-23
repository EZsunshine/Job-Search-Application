import React from "react";
import {Card, CardContent, Typography, Button} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SavedJobsListings({data}) {
    const minSalary = Math.round(data.salary_min).toString().slice(0,2);
    const maxSalary = Math.round(data.salary_max).toString().slice(0,3);

    return ( 
        <Card sx={{ border: "1px solid grey", maxHeight: 250 }}>
      
      <CardContent>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          {data.title}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="#4dabf5" gutterBottom>
          {data.company.display_name}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {data.location.display_name}
        </Typography>
        <div
          style={{
            backgroundColor: "#e1f5fe",
            width: "fit-content",
            paddingLeft: 5,
            paddingRight: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              verticalAlign: "middle",
              display: "inline-flex",
              
            }}
            color="text.primary"
            gutterBottom
          >
            <PriceChangeOutlinedIcon /> {minSalary}k/yr - {maxSalary}k/yr
          </Typography>
        </div>
        <Typography
          sx={{
            fontSize: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          posted on {data.created.substring(0, 10)}
          <Button
            variant="contained"
            href={data.redirect_url}
            color="primary"
            size="small"
            endIcon={<DoubleArrowIcon />}
          >
            See More
          </Button>
        </Typography>
      </CardContent>
    </Card>
     );
}

export default SavedJobsListings;