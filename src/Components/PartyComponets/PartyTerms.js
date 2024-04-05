import MeetingImage from '../../asset/MeetingImage.jpg';

const PartyTerms = () => {

  return (
    <>
      <h2>소모임 설명 이미지</h2>
      <br />
      <img src={MeetingImage} alt="모임 약관" style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </>
  );
}

export default PartyTerms;