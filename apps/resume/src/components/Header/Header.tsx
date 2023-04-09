import styled from '@emotion/styled';
import { Avatar, Text, useTheme } from '@nextui-org/react';
import { ThemeSwitch } from 'core';
import { authorImage, authorName } from 'core/constants';

import { IHeader } from '../../../_content/Header';

function Header({ heading, description }: IHeader) {
  const { theme } = useTheme();

  return (
    <header>
      <HeadingWrapper>
        <H1 h1 css={{ textGradient: `45deg, ${theme.colors.text.value} 10%, ${theme.colors.primary.value} 60%` }}>
          {heading}
        </H1>

        <ThemeSwitch />
      </HeadingWrapper>

      <DescriptionWrapper>
        <Avatar src={authorImage.default.src} alt={authorName} text={authorName} size="xl" />
        <P dangerouslySetInnerHTML={{ __html: description }}></P>
      </DescriptionWrapper>
    </header>
  );
}

export default Header;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled(Text)`
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 8px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-left: 0.875rem;
`;
