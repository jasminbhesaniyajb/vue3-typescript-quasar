import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { userType } from '@/type/UserList'

@Module({
  // name: 'users',
  namespaced: true 
})
class user extends VuexModule {
  public users: Array<userType> = [
    {
      fname: "Jasmin",
      lname: "JB",
      email: "jb@gmail.com",
      phone: "123456789",
      city: "Junagadh"
    },
    {
      fname: "John",
      lname: "deo",
      email: "john@gmail.com",
      phone: "9487398398",
      city: "Surat"
    },
    {
      fname: "Emperor Brains",
      lname: "EB",
      email: "eb@gmail.com",
      phone: "1256789122",
      city: "Hyderabad"
    }
  ]

  get allUserList(): Array<userType> {
    return this.users
  }
  
  @Action
  public addList(add: userType) {
    this.context.commit('save', add)
  }

  @Action
  public removeUser(id: number) {
    this.context.commit('remove', id)
  }
  
  @Mutation
  public save(data: userType) {
    this.users.push(data);
  }
  
  @Mutation
  public remove(recordId: userType) {
    this.users.push(recordId);
  }

}

export default user;