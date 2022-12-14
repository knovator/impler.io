/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import { createStyles, MantineTheme } from '@mantine/core';

export const getContainerStyles = (theme: MantineTheme): React.CSSProperties => ({
  flexDirection: 'column',
  width: '100%',
  alignItems: 'unset',
});

export const getTemplateContainerStyles = (theme: MantineTheme): React.CSSProperties => ({
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
});

export const getDownloadTemplateStyles = (theme: MantineTheme): React.CSSProperties => ({
  width: '50%',
});

export const getFooterStyles = (theme: MantineTheme): React.CSSProperties => ({
  alignSelf: 'flex-end',
});

export const getDropzoneStyles = (theme: MantineTheme): React.CSSProperties => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export default createStyles((theme: MantineTheme, params, getRef): Record<string, any> => {
  return {
    container: getContainerStyles(theme),
    templateContainer: getTemplateContainerStyles(theme),
    download: getDownloadTemplateStyles(theme),
    dropzone: getDropzoneStyles(theme),
  };
});
