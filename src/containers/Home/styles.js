import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeShell = styled.main`
  overflow: hidden;
  background: ${(props) => props.theme.cream};
  color: ${(props) => props.theme.graphite};
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[2]};
  color: ${(props) => props.theme.amber};
  font-size: ${(props) => props.theme.typography.label.size};
  font-weight: ${(props) => props.theme.typography.label.weight};
  line-height: ${(props) => props.theme.typography.label.lineHeight};
  text-transform: uppercase;
`;

export const Hero = styled.section`
  position: relative;
  display: grid;
  min-height: 720px;
  grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
  align-items: center;
  gap: ${(props) => props.theme.spacing[10]};
  padding: ${(props) => props.theme.spacing[20]} max(24px, calc((100vw - ${(props) => props.theme.layout.wide}) / 2))
    ${(props) => props.theme.spacing[12]};
  background:
    linear-gradient(120deg, rgba(32, 33, 36, 0.98) 0%, rgba(63, 11, 20, 0.95) 58%, rgba(95, 16, 29, 0.92) 100%),
    ${(props) => props.theme.graphite};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 44%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${(props) => props.theme.amber});
  }

  &::before {
    content: "";
    position: absolute;
    right: 4%;
    bottom: 9%;
    width: min(520px, 42vw);
    height: min(520px, 42vw);
    border: 1px solid rgba(200, 138, 45, 0.26);
    border-radius: 50%;
    opacity: 0.52;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing[10]};
    padding-top: ${(props) => props.theme.spacing[16]};
  }

  @media (max-width: 430px) {
    gap: ${(props) => props.theme.spacing[6]};
    padding: ${(props) => props.theme.spacing[10]} 16px
      ${(props) => props.theme.spacing[8]};
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  animation: ${riseIn} 520ms ease both;

  h1 {
    margin-top: ${(props) => props.theme.spacing[5]};
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.display.desktop};
    font-weight: ${(props) => props.theme.typography.display.weight};
    line-height: ${(props) => props.theme.typography.display.lineHeight};
  }

  p {
    max-width: 600px;
    margin-top: ${(props) => props.theme.spacing[6]};
    color: ${(props) => props.theme.darkWhite};
    font-size: 18px;
    line-height: 1.75;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: ${(props) => props.theme.typography.display.tablet};
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: clamp(34px, 10vw, 40px);
    }

    p {
      margin-top: ${(props) => props.theme.spacing[4]};
      font-size: ${(props) => props.theme.typography.body.mobile};
      line-height: 1.58;
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[3]};
  margin-top: ${(props) => props.theme.spacing[8]};

  a {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing[2]};
    padding: 0 ${(props) => props.theme.spacing[6]};
    border-radius: ${(props) => props.theme.radii.pill};
    text-decoration: none;
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    transition:
      background-color ${(props) => props.theme.transitions.base},
      border-color ${(props) => props.theme.transitions.base},
      color ${(props) => props.theme.transitions.base},
      transform ${(props) => props.theme.transitions.fast};

    &:first-child {
      background: ${(props) => props.theme.amber};
      color: ${(props) => props.theme.graphite};
    }

    &:last-child {
      border: 1px solid rgba(255, 248, 239, 0.22);
      color: ${(props) => props.theme.white};
      background: rgba(255, 248, 239, 0.06);
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 430px) {
    margin-top: ${(props) => props.theme.spacing[6]};

    a {
      width: 100%;
      min-height: 48px;
    }
  }
`;

export const HeroMedia = styled.div`
  position: relative;
  min-height: 520px;
  margin-right: min(-72px, -4vw);
  background: transparent;
  filter: drop-shadow(0 36px 70px rgba(0, 0, 0, 0.34));
  animation: ${riseIn} 640ms ease 80ms both;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(63, 11, 20, 0.58), rgba(32, 33, 36, 0.04) 54%),
      linear-gradient(180deg, transparent 58%, rgba(32, 33, 36, 0.52));
    border-radius: 36px 0 0 36px;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    right: 13%;
    bottom: 17%;
    width: 48%;
    height: 18%;
    border-radius: 50%;
    background: rgba(32, 33, 36, 0.28);
    filter: blur(8px);
    z-index: 1;
  }

  > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
    border-radius: 36px 0 0 36px;
  }

  div {
    position: absolute;
    left: ${(props) => props.theme.spacing[8]};
    bottom: ${(props) => props.theme.spacing[8]};
    z-index: 2;
    display: grid;
    gap: ${(props) => props.theme.spacing[2]};
    padding: ${(props) => props.theme.spacing[5]};
    border-radius: ${(props) => props.theme.radii.md};
    background: ${(props) => props.theme.cream};
    color: ${(props) => props.theme.graphite};
    box-shadow: ${(props) => props.theme.shadows.medium};
  }

  span {
    color: ${(props) => props.theme.brand};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  strong {
    font-size: ${(props) => props.theme.typography.h3.mobile};
    font-weight: ${(props) => props.theme.typography.h3.weight};
  }

  @media (max-width: 1024px) {
    min-height: 420px;
    margin-right: 0;
  }

  @media (max-width: 430px) {
    min-height: 252px;

    div {
      left: ${(props) => props.theme.spacing[4]};
      right: ${(props) => props.theme.spacing[4]};
      bottom: ${(props) => props.theme.spacing[4]};
      padding: ${(props) => props.theme.spacing[4]};
    }
  }
`;

export const HeroHighlights = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 430px) {
    gap: ${(props) => props.theme.spacing[3]};

    > *:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

export const StatCard = styled.div`
  padding: ${(props) => props.theme.spacing[5]};
  border: 1px solid rgba(255, 248, 239, 0.12);
  border-radius: ${(props) => props.theme.radii.md};
  background: rgba(255, 248, 239, 0.06);
  color: ${(props) => props.theme.white};

  strong {
    display: block;
    color: ${(props) => props.theme.amber};
    font-size: 28px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.darkWhite};
    font-size: ${(props) => props.theme.typography.small.size};
    font-weight: 600;
  }

  @media (max-width: 430px) {
    padding: ${(props) => props.theme.spacing[4]};

    strong {
      font-size: 24px;
    }
  }
`;

export const HomeSection = styled.section`
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing[20]} 0 0;

  @media (max-width: 430px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    padding-top: ${(props) => props.theme.spacing[10]};
  }
`;

export const SectionHeader = styled.header`
  max-width: 720px;
  margin-bottom: ${(props) => props.theme.spacing[8]};

  h2 {
    margin-top: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h2.desktop};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  }

  p {
    margin-top: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.typography.body.desktop};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  @media (max-width: 430px) {
    margin-bottom: ${(props) => props.theme.spacing[5]};

    h2 {
      font-size: clamp(26px, 7.6vw, 30px);
    }

    p {
      margin-top: ${(props) => props.theme.spacing[3]};
      font-size: ${(props) => props.theme.typography.body.mobile};
      line-height: 1.55;
    }
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${(props) => props.theme.spacing[4]};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.spacing[3]};
  }
`;

export const CategoryCard = styled(Link)`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacing[2]};
  padding: ${(props) => props.theme.spacing[5]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.graphite};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  box-shadow: ${(props) => props.theme.shadows.soft};
  overflow: hidden;
  position: relative;
  transition:
    border-color ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    border-color: ${(props) => props.theme.amber};
    box-shadow: ${(props) => props.theme.shadows.medium};
    transform: translateY(-4px);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(32, 33, 36, 0.08), rgba(32, 33, 36, 0.88)),
      linear-gradient(35deg, rgba(63, 11, 20, 0.68), transparent 54%);
  }

  span {
    z-index: 1;
    position: relative;
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  strong {
    z-index: 1;
    position: relative;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.h3.desktop};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  }

  small {
    z-index: 1;
    position: relative;
    color: ${(props) => props.theme.darkWhite};
    font-size: ${(props) => props.theme.typography.small.size};
    font-weight: 700;
  }

  @media (max-width: 520px) {
    min-height: 172px;
    gap: ${(props) => props.theme.spacing[1]};
    padding: ${(props) => props.theme.spacing[4]};

    strong {
      font-size: 18px;
    }

    small {
      font-size: 12px;
    }
  }
`;

export const CategoryMedia = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 248, 239, 0.06), rgba(143, 29, 44, 0.12)),
    url("${(props) => props.$imageUrl}") center / cover no-repeat,
    ${(props) => props.theme.graphite};
  transform: scale(1.01);
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${(props) => props.theme.spacing[5]};

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.spacing[3]};
  }
`;

export const ProductCard = styled.article`
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
  padding: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};
  transition:
    border-color ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    border-color: ${(props) => props.theme.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.medium};
    transform: translateY(-3px);
  }

  > div:nth-of-type(2) {
    min-height: 74px;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.mobile};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  }

  p {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.typography.small.size};
    font-weight: 600;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing[3]};

    > span {
      color: ${(props) => props.theme.brand};
      font-size: 22px;
      font-weight: 800;
      line-height: 1;
    }

    button {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${(props) => props.theme.spacing[2]};
      padding: 0 ${(props) => props.theme.spacing[4]};
      border: 0;
      border-radius: ${(props) => props.theme.radii.pill};
      background: ${(props) => props.theme.graphite};
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.typography.button.size};
      font-weight: ${(props) => props.theme.typography.button.weight};
      transition:
        background-color ${(props) => props.theme.transitions.base},
        transform ${(props) => props.theme.transitions.fast};

      &:hover {
        background: ${(props) => props.theme.brand};
        transform: translateY(-1px);
      }
    }
  }

  @media (max-width: 430px) {
    gap: ${(props) => props.theme.spacing[3]};
    padding: ${(props) => props.theme.spacing[3]};

    > div:nth-of-type(2) {
      min-height: 58px;
    }

    strong {
      display: -webkit-box;
      overflow: hidden;
      font-size: 15px;
      line-height: 1.24;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    p {
      margin-top: ${(props) => props.theme.spacing[1]};
      font-size: 12px;
    }

    footer {
      align-items: stretch;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing[2]};

      > span {
        font-size: 19px;
      }

      button {
        width: 100%;
        min-height: 44px;
        padding: 0 ${(props) => props.theme.spacing[2]};
        font-size: 13px;
      }
    }
  }
`;

export const ProductImage = styled.div`
  position: relative;
  display: grid;
  min-height: 188px;
  place-items: center;
  border-radius: ${(props) => props.theme.radii.sm};
  background:
    linear-gradient(145deg, ${(props) => props.theme.cream}, ${(props) => props.theme.creamDeep});
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 188px;
    object-fit: cover;
  }

  span {
    position: absolute;
    top: ${(props) => props.theme.spacing[3]};
    left: ${(props) => props.theme.spacing[3]};
    padding: ${(props) => props.theme.spacing[2]} ${(props) => props.theme.spacing[3]};
    border-radius: ${(props) => props.theme.radii.pill};
    background: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
  }

  @media (max-width: 430px) {
    min-height: 124px;

    img {
      min-height: 124px;
    }

    span {
      top: ${(props) => props.theme.spacing[2]};
      left: ${(props) => props.theme.spacing[2]};
      padding: 6px ${(props) => props.theme.spacing[2]};
      font-size: 11px;
    }
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${(props) => props.theme.spacing[4]};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    gap: ${(props) => props.theme.spacing[3]};

    > *:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

export const BenefitCard = styled.article`
  display: grid;
  gap: ${(props) => props.theme.spacing[3]};
  padding: ${(props) => props.theme.spacing[6]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  svg {
    color: ${(props) => props.theme.brand};
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.mobile};
    font-weight: ${(props) => props.theme.typography.h3.weight};
  }

  p {
    color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.typography.body.mobile};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  @media (max-width: 520px) {
    gap: ${(props) => props.theme.spacing[2]};
    padding: ${(props) => props.theme.spacing[4]};

    svg {
      width: 24px;
      height: 24px;
    }

    strong {
      font-size: 17px;
    }

    p {
      font-size: 14px;
      line-height: 1.45;
    }
  }
`;

export const CtaBand = styled.section`
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[8]};
  margin: ${(props) => props.theme.spacing[20]} auto;
  padding: ${(props) => props.theme.spacing[10]};
  border-radius: ${(props) => props.theme.radii.lg};
  background: ${(props) => props.theme.graphite};
  color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.shadows.strong};

  @media (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing[6]};
  }

  @media (max-width: 430px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    margin: ${(props) => props.theme.spacing[12]} auto;
    padding: ${(props) => props.theme.spacing[5]};
  }
`;

export const CtaContent = styled.div`
  max-width: 620px;

  h2 {
    margin-top: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.h2.desktop};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  }

  p {
    margin-top: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.darkWhite};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  @media (max-width: 430px) {
    h2 {
      font-size: ${(props) => props.theme.typography.h2.mobile};
    }
  }
`;

export const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[3]};

  a {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${(props) => props.theme.spacing[5]};
    border-radius: ${(props) => props.theme.radii.pill};
    text-decoration: none;
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    transition:
      background-color ${(props) => props.theme.transitions.base},
      color ${(props) => props.theme.transitions.base},
      transform ${(props) => props.theme.transitions.fast};

    &:first-child {
      background: ${(props) => props.theme.amber};
      color: ${(props) => props.theme.graphite};
    }

    &:last-child {
      border: 1px solid rgba(255, 248, 239, 0.2);
      color: ${(props) => props.theme.white};
    }

    &:hover {
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    a {
      width: 100%;
    }
  }
`;
