import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
function Card_Items() {
  return (
     
<div className="row">
  <div className="col-12 d-flex gap-2">
    <Card sx={{ maxWidth: 140, backgroundColor : "#F2FCE4" , margin : "30px" ,  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
          Cake&Mlik
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           28 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 140, backgroundColor : "#F2FCE4" , margin : "30px" , marginLeft : "8px" ,backgroundColor : "#FFFCEB"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png"
          alt="green iguana" style={{objectFit : "contain" , }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
          OganicKiwi
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           26 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 140, backgroundColor : "#ECFFEC" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
          Peach
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center" }}>
           14 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 140, backgroundColor : "#FEEFEA" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
          alt="green iguana" style={{objectFit : "contain" ,}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
       Red&Apples
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           54 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 140, backgroundColor : "#FFF3FF" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
          Sanck
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           66 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 140, backgroundColor : "#FEEFEA" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
        Cake&Mlik
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           78 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 140, backgroundColor : "#F2FCE4" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
        Cake&Mlik
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           12 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 140, backgroundColor : "#FEEFEA" , margin : "30px" , marginLeft : "8px"  }}>
      <CardActionArea>
        <CardMedia component="img" height="80"
          width="100%"
          image="	https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png"
          alt="green iguana" style={{objectFit : "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{textAlign :"center"}}>
        Cake&Mlik
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :"center"}}>
           98 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    </div>
  
</div>
  );
}

export default Card_Items;