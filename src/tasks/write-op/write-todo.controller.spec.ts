import { Test, TestingModule } from "@nestjs/testing";
import { WriteTodoController } from "./write-todo.controller";
import { WriteTodoService } from "./write-todo.service";
import { Todo } from "../entities/task.entity";
import { TaskPriority, TaskStatus } from "../enums/Task-enums";
import { BaseUserDto } from "../../users/dto/base-user.dto";
import { BaseTodoDto } from "../dto/base-todo.dto";


/***** About the Test ***************************
 ?* Since we're using a ValidationPipe(), the tests should assume that all values
 ?* are validated before they reach the controller.Therefore, the focus of the tests
 ?* test suite is designed to validate the functionality and exceptions that could
 ?* be triggered after the validation step. The tests will cover the following scenarios:
 ** 1. Successful creation of a new todo item with valid data.
 ** 2. Successful creation of a new todo item with optional fields included.
 !* 3. Handling errors thrown by the service.
 !* 4. Handling unique constraint violations from the database.
 !* 5. Creating a todo item without versions.
 !* 6. Ensuring the service create method is called exactly once.
 !* 7. Creating a new todo item when the priority is not set.
 !* 8. Verifying that the controller returns the created todo item and the correct HTTP status.
 *****/


describe('WriteTodoController', () => {
  let controller: WriteTodoController;
  let service: WriteTodoService;

  //? Mock user
  const user:BaseUserDto = {
    "name": 'John Doe',
    "email": 'john@example.com',};

  //? Mock data
  const mockCreateTodoDto: BaseTodoDto = {
    user: user, versions: [],
    title: 'New Todo',
    description: 'This is a test todo item'
  }


//? Mock MockTodo
  const mockTodo: Todo = {
    registry: undefined, user: undefined, versions: [],
    afterInsert(): void {}, afterLoad(): void {}, afterUpdate(): void {},
    identifier: 1,
    title: 'Test Todo',
    description: 'This is a test todo item.',
    status: TaskStatus.NOT_STARTED,
    dueDate: new Date(),
    priority: TaskPriority.LOW

  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WriteTodoController],
      providers: [{
        provide: WriteTodoService,
        useValue: {
          create: jest.fn().mockResolvedValue(mockTodo)
        }
      }],
    }).compile();

    controller = module.get<WriteTodoController>(WriteTodoController);
    service = module.get<WriteTodoService>(WriteTodoService)
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // 1. Successfully create a new todo item with valid data
  it('should create a new todo successfully', async () => {
    const result = await controller.create(mockCreateTodoDto);
    expect(service.create).toHaveBeenCalledWith(mockCreateTodoDto);
    expect(result).toEqual(mockTodo);
  });

  it('should create a new todo successfully with optional fields', async () => {
    const mockCreateTodoWithOptionalFields = {
      ...mockCreateTodoDto,
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.HIGH,
      duDate: new Date(),
    };
    const result = await controller.create(mockCreateTodoWithOptionalFields);
    expect(service.create).toHaveBeenCalledWith(mockCreateTodoWithOptionalFields);
    expect(result).toEqual(mockTodo);
  });

  it('should throw an error if the service throws an error', async () => {
    jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Service Error'));
    await expect(controller.create(mockCreateTodoDto)).rejects.toThrow('Service Error');
  });

  it('should throw an error if a unique constraint is violated in the database', async () => {
    jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Unique constraint error'));
    await expect(controller.create(mockCreateTodoDto)).rejects.toThrow('Unique constraint error');
  });

  it('should create a new todo without versions', async () => {
    const todoWithoutVersions = { ...mockCreateTodoDto, versions: [] };
    const result = await controller.create(todoWithoutVersions);
    expect(service.create).toHaveBeenCalledWith(todoWithoutVersions);
    expect(result).toEqual(mockTodo);
  });

  it('should call the create method of the service once', async () => {
    await controller.create(mockCreateTodoDto);
    expect(service.create).toHaveBeenCalledTimes(1);
  });

  it('should create a new todo when priority is not set', async () => {
    const todoWithoutPriority = { ...mockCreateTodoDto, priority: undefined };
    const result = await controller.create(todoWithoutPriority);
    expect(service.create).toHaveBeenCalledWith(todoWithoutPriority);
    expect(result).toEqual(mockTodo);
  });

  it('should return the created todo and HTTP status 201', async () => {
    const result = await controller.create(mockCreateTodoDto);
    expect(result).toEqual(mockTodo); // Check the returned value
    expect(service.create).toHaveBeenCalledWith(mockCreateTodoDto); // Ensure the service was called with correct DTO

  });
});
