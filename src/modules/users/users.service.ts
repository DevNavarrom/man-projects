import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {

  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) {}


  async create(createUserDto: CreateUserDto) {
    try {

      const user = this.userRepository.create(createUserDto);

      await this.userRepository.save(user);

      return user;

    } catch (error) {
      this.handleDBException(error);
    }
  }


  findAll() {
    return this.userRepository.find({});
  }

  
  async findOne(id: string) {

    const user = await this.userRepository.findOneBy({ id });

    if ( !user ) throw new NotFoundException(`User with id #${id} not found`);

    return user;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }


  async remove(id: string) {

    const user = await this.findOne(id);

    await this.userRepository.remove( user );

  }

  
  private handleDBException(error: any) {
    if (error.code === 'ER_DUP_ENTRY')
      throw new BadRequestException(error.sqlMessage)
    
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
