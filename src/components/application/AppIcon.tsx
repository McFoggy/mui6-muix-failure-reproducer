import WebAssetIcon from '@mui/icons-material/WebAsset';
import {styled, SvgIconProps} from "@mui/material";
import {FC} from "react";

const AppIcon: FC<SvgIconProps> = (props) => {
    return (
        <WebAssetIcon {...props}></WebAssetIcon>
    )
}

const StyledAppIcon = styled(AppIcon)({
    color: "error"
})

export { StyledAppIcon }