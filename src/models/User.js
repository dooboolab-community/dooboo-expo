import { observable } from 'mobx';

class User {
  @observable displayName: string = '';
  @observable age: number = '';
  @observable job: string = '';
}

export default User;
