import { Box } from "@mui/material";

export default function Preview({ img_position, title, img_path, description }: { img_position: 'right' | 'left', title: string, img_path: string, description: string }) {
    const img_style = { width: '100%', borderRadius: '10px' };
    const img_container_style = { width: '50%', padding: '50px', borderRadius: '10px' };
    const title_style = {display: 'flex', color: 'white', fontSize: 64, justifyContent:'space-evenly'};
    const description_style = {color: 'white', fontSize: 22};
    const title_description_style = { width: '50%', padding: '25px' };
  return (
    <div>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', paddingX: '15px', paddingY: '30px', backgroundColor: '#80AE8A' }}>
        {img_position === 'left' ? (
          <>
            <div style={img_container_style}>
              <img src={img_path} style={img_style} />
            </div>
            <div style={{ width: '50%', padding: '25px' }}>
              <h2 style={title_style}>{title}</h2>
              <p style={description_style}>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div style={title_description_style}>
              <h2 style={title_style}>{title}</h2>
              <p style={description_style}>{description}</p>
            </div>
            <div style={{ width: '50%', padding: '25px', borderRadius: '10px' }}>
              <img src={img_path} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          </>
        )}
      </Box>
    </div>
  );
}
