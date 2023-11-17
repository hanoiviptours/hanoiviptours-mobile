import { Icon } from '@/components';
import { TFunction } from 'i18next';
import {
  PlaneCommand,
  PlaneReg,
  PlaneNotifi,
  PlaneReturn,
  PlaneTicket,
} from '@/theme/assets/icons';
const iconSize = 55;

interface RenderExtraUtil {
  icon: JSX.Element;
  content: string;
  header: string;
  background: string;
}

const RenderExtraUtils = (t: TFunction): RenderExtraUtil[] => [
  {
    icon: <PlaneCommand width={iconSize} height={iconSize} />,
    header: t('plane:command'),
    content: t('plane:subCommand'),
    background: '#EDF0FF',
  },
  {
    icon: <PlaneTicket width={iconSize} height={iconSize} />,
    header: t('plane:ticket'),
    content: t('plane:subTicket'),
    background: '#EEF9FF',
  },
  {
    icon: <PlaneNotifi width={iconSize} height={iconSize} />,
    header: t('plane:notifi'),
    content: t('plane:subNotifi'),
    background: '#F7F0F8',
  },
  {
    icon: <PlaneReg width={iconSize} height={iconSize} />,
    header: t('plane:reg'),
    content: t('plane:subReg'),
    background: '#EAFCEE',
  },
  {
    icon: <PlaneReturn width={iconSize} height={iconSize} />,
    header: t('plane:return'),
    content: t('plane:subReturn'),
    background: '#E4F7F5',
  },
];
export default RenderExtraUtils;
