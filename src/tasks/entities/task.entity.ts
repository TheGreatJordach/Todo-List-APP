import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegistryDate } from "../../common/embedded/registry-date";
import { TaskPriority, TaskStatus } from "../enums/Task-enums";
import { TodoVersion } from "../../versioning/entity/task-version.entity";
import { User } from "../../users/entities/user.entity";




@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  identifier: number;
  @Column({ type: 'varchar', length: 255 })
  title: string;
  @Column()
  description: string;

  @Column({ type:"enum",enum:TaskStatus,default:TaskStatus.NOT_STARTED,nullable: true })
  status?: TaskStatus;


  @Column({ nullable: true })
  dueDate?: Date;

  @Column({ type: 'enum', enum: TaskPriority, nullable: true, default:TaskPriority.LOW })
  priority?: TaskPriority;


  @OneToMany(() => TodoVersion, (version) => version.todo)
  versions: TodoVersion[];

  @OneToMany( ()=> User, (user) => user.todos)
  user:User

  @Column(() => RegistryDate,{prefix:false})
  registry:RegistryDate

  @AfterLoad()
  afterLoad(){
    console.log(`Entity ${this.title} Loaded on memory`);
  }

  @AfterUpdate()
  afterUpdate(){
    console.log(`Entity ${this.title} updated `);
  }

  @AfterInsert()
  afterInsert(){
    console.log(`Entity ${this.title} Inserted `);
  }
}

