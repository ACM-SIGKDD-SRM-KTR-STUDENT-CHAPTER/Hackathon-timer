export interface SocialIconProps {
    svgPath: string;
    fill: string;
    width: string;
    height: string;
}

export const SocialIcon = ({svgPath, fill, width, height}: SocialIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
    <path fill={fill} d={svgPath}/>
  </svg>    
)