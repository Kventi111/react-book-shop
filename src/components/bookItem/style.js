import styled from 'styled-components'

export const CardWrapper = styled.div`
  width:  23%;
  margin: 30px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
`

export const CardHeader = styled.div`
  display: flex;
  /* align-items: center; */
  padding: 10px 15px;  
`

export const CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardHeaderIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #666;
  margin: 0 15px 0 0;
`

export const CardSection = styled.div`
  /* border: 1px solid; */
`

export const CardSectionTitle = styled.div`
  font-size: 18px;
`
export const CardSectionSubtitle = styled.div`
  font-size: 14px;
  color: #666;
`

export const CardImgSection = styled.img`
  width: 100%;
  max-height: 250px;
  background-repeat: no-repeat;
  background-image: url(${props => props.src });
`

export const CardDescriptionSection = styled.div`
  padding: 10px 15px;
  color: 16px;
  color: #666;
  min-height: 75px;
`

export const CardActionSection = styled.div`
 
`
export const CardActionItem = styled.div`
  padding: 10px 15px;
  color: purple;
  font-size: 18px;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    background: #666;
    color: #fff;
  }
`