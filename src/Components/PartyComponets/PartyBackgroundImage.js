import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import DrinkPartyImage from '../../asset/DrinkPartyIImage.jpg';

const PartyEBackgroundImage = () => {

  const CustomDiv = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${DrinkPartyImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '350px',
    width: '100vw',
    margin: '0',
    overflow: 'hidden'
  });

  return (
    <>
      <CustomDiv>
        <Typography variant='h2' color='white' align='center'>
          찐들의 모임
        </Typography>
      </CustomDiv>
      <br /><br />
    </>
  );
}

export default PartyEBackgroundImage;