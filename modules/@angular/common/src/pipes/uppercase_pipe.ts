import {PipeTransform, WrappedValue, Injectable, Pipe} from '@angular/core';
import {isString, isBlank} from '@angular/facade';
import {InvalidPipeArgumentException} from './invalid_pipe_argument_exception';

/**
 * Implements uppercase transforms to text.
 *
 * ### Example
 *
 * {@example core/pipes/ts/lowerupper_pipe/lowerupper_pipe_example.ts region='LowerUpperPipe'}
 */
/* @ts2dart_const */
@Pipe({name: 'uppercase'})
@Injectable()
export class UpperCasePipe implements PipeTransform {
  transform(value: string, args: any[] = null): string {
    if (isBlank(value)) return value;
    if (!isString(value)) {
      throw new InvalidPipeArgumentException(UpperCasePipe, value);
    }
    return value.toUpperCase();
  }
}