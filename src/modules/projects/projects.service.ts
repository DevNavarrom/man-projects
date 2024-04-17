import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {

  private readonly logger = new Logger('ProjectsService');


  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) {}


  async create(createProjectDto: CreateProjectDto) {
    try {
      console.log(new Date())
      const project = this.projectRepository.create(createProjectDto);

      await this.projectRepository.save(project);

      return project;

    } catch (error) {
      this.handleDBException(error);
    }
  }

  findAll() {
    return this.projectRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }


  private handleDBException(error: any) {
    if (error.code === 'ER_DUP_ENTRY')
      throw new BadRequestException(error.sqlMessage)
    
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }

}
