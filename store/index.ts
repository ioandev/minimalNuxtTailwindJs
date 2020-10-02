
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {StoreExample} from './types'
import axios from 'axios';

export const state = () => ({
  key: undefined,
});

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<StoreExample, RootState> = {
  async nuxtServerInit() {
    // ..
  }
};

export const getters: GetterTree<StoreExample, RootState> = {
  //...
};

export const mutations: MutationTree<StoreExample> = {
  //..
};
