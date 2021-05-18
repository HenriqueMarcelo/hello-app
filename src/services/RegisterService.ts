import {RegisterProps} from '../props';
import storage from './storage';

const save = async (register: RegisterProps) => {
  let currentArray: RegisterProps[] = [];
  try {
    currentArray = await all();
  } catch (e) {}
  currentArray.push(register);
  storage.save({
    key: 'registers',
    data: currentArray,
    expires: null,
  });
};

const all = async (): Promise<RegisterProps[]> => {
  return await storage.load({
    key: 'registers',
  });
};

const removeAll = async () => {
  return await storage.remove({
    key: 'registers',
  });
};

export default {
  save,
  all,
  removeAll,
};
