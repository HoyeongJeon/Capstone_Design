import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('video'))
  uploadVideo(
    @UploadedFile()
    video: Express.Multer.File,
  ) {
    console.log(video);
  }
}
