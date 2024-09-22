import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Todo } from "../../tasks/entities/task.entity";


@Entity("Tasks-version")
export class TodoVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  version: number;

  @Column({ type: 'json' })
  data: Partial<Todo>;

  @ManyToOne(() => Todo, (todo) => todo.versions)
  todo: Todo;

  @CreateDateColumn()
  createdAt: Date;

  @AfterLoad()
  afterLoad(){
    console.log(`Entity version ${this.version} Loaded on memory`);
  }

  @AfterUpdate()
  afterUpdate(){
    console.log(`Entity  version ${this.version} updated `);
  }

  @AfterInsert()
  afterInsert(){
    console.log(`Entity version ${this.version} Inserted `);
  }
}
