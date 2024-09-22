import { Todo } from "../../tasks/entities/task.entity";
import { AfterInsert, AfterLoad, AfterUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RegistryDate } from "../../common/embedded/registry-date";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  UserId:number
  @Column()
  name:string

  @Column({nullable:false,unique:true})
  email:string

  @Column({nullable:false})
  password:string

  @Column({unique:true})
  profile:string

  @ManyToOne(() => Todo, (todo) => todo.user)
  todos:Todo[]

  @Column(() => RegistryDate, {prefix:false})
  registry:RegistryDate

  @AfterLoad()
  afterLoad(){
    console.log(`Entity ${this.name} Loaded on memory`);
  }

  @AfterUpdate()
  afterUpdate(){
    console.log(`Entity ${this.name} updated `);
  }

  @AfterInsert()
  afterInsert(){
    console.log(`Entity ${this.name} Inserted `);
  }
}
