process.env["NODE_CONFIG_DIR"] = './src/config'
import config from 'config';

export const getPort = () => config.get<number>('port');