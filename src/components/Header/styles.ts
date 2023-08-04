import Image from 'next/image'
import styled from 'styled-components'

export const StyleHeader = styled.header`
    background-color: ${({theme}) => theme.colors.purple};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 82px;
`

export const FlexHeader = styled.div`
    width: 100%;
    padding-inline: 12px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AvatarHeader = styled(Image)`
    width: 50px;
    height: 50px;
    margin-right: 12px;
`