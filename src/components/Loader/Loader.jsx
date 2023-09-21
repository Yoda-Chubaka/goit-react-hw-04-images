import { RotatingLines } from  'react-loader-spinner'
import { WrapperLoader } from './Loader.styled';

export const Loader = () =>
(<WrapperLoader>
    <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
    />
</WrapperLoader>);