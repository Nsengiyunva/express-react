import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import StyledFooter, { ListItem } from '../../components/StyledFooter';
import styled from 'styled-components';
import { device } from '../../_utils/devices';
import { ImageContainer, MainPartnerContainer, LeftBox } from '../Team';

const Title = styled.span`
  font-size: ${props => `${props.size}rem`};
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: ${props => props.belowSpaced && `0.5rem`}
`;

const Titled = styled.span`
  position: relative;
  font-size: ${props => `${props.size}rem`};
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 3rem;

  :before {
    content:'';
    position: absolute;
    height: .25rem;
    width: 3rem;
    background: #ED1D24;
    left: 0;
    bottom: -15px;
    z-index: 1;
    border-radius:6px;
  }
`;

const TextItem = styled.span`
  font-size: ${props => `${props.size}rem`};
  font-weight: 700;
  color: #444;
`;

const TextItemParagraph = styled.p`
  font-size: ${props => `${props.size}rem`};
  font-weight: 600;
  color: #444;
  line-height: 1.5rem;
`;
//balance = 116875
const data = {
  whoWeAre: 'At willibooks Limited, we publish, produce, market, and  distribute  life  changing  books  across the globe. Our books are inspired by the Spirit of God and are written to educate, guide, instruct, impact and bless the reader!  It is so important to note that our books are not limited to the Christian faith only, but are opened  to all and for all to read including but not limited to; Muslims, Buddhists, Hindus, and Jewish readers.',
  motto: 'Changing lives',
  mission: 'Making Humans more conscious of their divinity than they are of their humanity',
  objective: 'Reaching millions across the globe with life changing books',
  goal: 'Getting millions of people across the globe living a lifeworth praising God for',
};

const UnderLinedTitleDetail = ({ title, subtitleTop, subtitleBottom, link }) => (
  <div style={{ padding: '1rem'}}>
    <Titled size={1} color='black' belowSpaced>{title}</Titled>
    <div style={{ marginTop:'2rem'}}>
      <TextItemParagraph size={.85}>{subtitleTop}</TextItemParagraph>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TextItemParagraph size={.85}>{subtitleBottom}</TextItemParagraph>
        <a href={link} target='_blank' style={{ paddingLeft: '0.5rem', fontSize:'inherit'}}>{link}</a>
      </div>
    </div>
  </div>
);

const DetailComponent = ({ title, content }) => (
  <div style={{ display: 'flex',lineHeight: '2rem', flexDirection: 'column', padding: '1rem', marginBottom: '.5rem'}}>
    <Title size={2} color='black' belowSpaced>{title}</Title>
    <TextItem size={.85}>{content}</TextItem>
  </div>
);


export default () => {
    return (
        <>
            <TopNavBar/>
            <ImageContainer>
                <Title size={4} color='white'>About us</Title>
            </ImageContainer>
            <MainPartnerContainer notJustified>
                <div style={{ display: 'flex', flex: '1', backgroundColor: 'white',padding: '1rem', flexDirection: 'column', borderRight: '1px solid #ddd'}}>
                  <DetailComponent title='Who Are We' content={data['whoWeAre']} />
                  <DetailComponent title='Motto' content={data['motto']} />
                  <DetailComponent title='Mission' content={data['mission']} />
                  <DetailComponent title='Objective' content={data['objective']} />
                  <DetailComponent title='Goal' content={data['goal']} />
                </div>
                <div style={{ display: 'flex', flex: '3',borderRight: '1px solid #ddd',flexDirection:'column',backgroundColor: 'white',display: 'flex', flex: '1', padding: '1rem'}}>
                  <Titled size={2} color='black' belowSpaced>External Authorities</Titled>
                  <>
                    <UnderLinedTitleDetail
                        title='URSB'
                        subtitleTop='Our Company Registration Number under the Uganda Registration Service Bureau: 80020001375268'
                        subtitleBottom='For more detail on URSB kindly visit the official website:'
                        link='https://ursb.go.ug/'
                    />
                    <UnderLinedTitleDetail
                        title='URA'
                        subtitleTop='Our Tax Identification number under the Uganda Revenue Authority: 1014121151'
                        subtitleBottom='For more detail on URA kindly visit the official website:'
                        link='https://www.ura.go.ug/'
                    />
                    <UnderLinedTitleDetail
                        title='KCCA'
                        subtitleTop='Our trade license number under the Kampala city council Authority: 0000215422'
                        subtitleBottom='For more detail on KCCA, kindly visit the official website:'
                        link='https://www.kcca.go.ug'
                    />
                    <UnderLinedTitleDetail
                        title='UNL'
                        subtitleTop='All our books are registered with the Uganda National Library, the official ISBN '
                        subtitleBottom='Issuer in Uganda. Visit'
                        link='https://www.nlu.go.ug/'
                    />
                    <UnderLinedTitleDetail
                        title='URRO'
                        subtitleBottom='The Uganda Reproduction Rights Organization (URRO) is licensed by URSB as a collecting society in line with the Copyright and Neighboring Rights Act 2006. Our mandate is to protect the copyright of local and foreign authors and publishers of literary materials in Uganda. Its membership includes authors and publishers of literary works in Uganda. URRO represents foreign authors and publishers through reciprocal representation with foreign reproduction rights organizations'
                    />
                  </>
                </div>
                <div style={{ display: 'flex', flex:'1', flexDirection:'column',backgroundColor: 'white',display: 'flex', flex: '1', padding: '1rem'}}>
                  <Titled size={2} color='black' belowSpaced>Business Associates</Titled>
                    <>
                      <li><TextItem size={.85}>MTN Uganda</TextItem></li>
                      <div style={{ padding: '1rem',lineHeight: '2rem'}}>
                          <ul>
                            <li><TextItem size={.75}>Dial *165# on your mobile phone</TextItem></li>
                            <li><TextItem size={.75}>Select 4 </TextItem></li>
                            <li><TextItem size={.75}>Select 4 again</TextItem></li>
                            <li><TextItem size={.75}>Enter Business code (willibooks)</TextItem></li>
                            <li><TextItem size={.75}>Enter reference(your full name)</TextItem></li>
                            <li><TextItem size={.75}>Enter amount</TextItem></li>
                            <li><TextItem size={.75}>Enter pin</TextItem></li>
                          </ul>
                      </div>
                    </>
                    <>
                      <li><TextItem size={.85}>AIRTEL Uganda</TextItem></li>
                      <div style={{ padding: '1rem',lineHeight: '2rem'}}>
                          <ul>
                            <li><TextItem size={.75}>Dial *185# on your mobile phone</TextItem></li>
                            <li><TextItem size={.75}>Select 4 </TextItem></li>
                            <li><TextItem size={.75}>Select 9</TextItem></li>
                            <li><TextItem size={.75}>Enter Business number (551199)</TextItem></li>
                            <li><TextItem size={.75}>Enter amount</TextItem></li>
                            <li><TextItem size={.75}>Enter reference(your full name)</TextItem></li>
                            <li><TextItem size={.75}>Enter pin</TextItem></li>
                          </ul>
                      </div>
                    </>
                    <li><TextItem size={.85}>MPK Graphics Uganda</TextItem></li>
                </div>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}
