import React, { useContext } from 'react';
import { AppContext, UseAppStoreType } from '../../contexts/AppContext';

import MakerForm from '../../components/MakerForm';
import { LimitList, Maker, Favorites } from '../../models';
import { Paper } from '@mui/material';

interface MakerWidgetProps {
  style?: Object;
  className?: string;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onTouchEnd?: () => void;
}

const MakerWidget = React.forwardRef(
  ({ style, className, onMouseDown, onMouseUp, onTouchEnd }: MakerWidgetProps, ref) => {
    const { maker, fav, limits } = useContext<UseAppStoreType>(AppContext);
    return React.useMemo(() => {
      return (
        <Paper
          elevation={3}
          style={{ padding: 8, overflow: 'auto', width: '100%', height: '100%' }}
        >
          <MakerForm />
        </Paper>
      );
    }, [maker, limits, fav]);
  },
);

export default MakerWidget;
