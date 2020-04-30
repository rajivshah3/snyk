import { DepTree } from '../../types';
import { ContainerTarget } from '../types';

export async function getInfo(
  packageInfo: DepTree,
  isFromContainer: boolean,
): Promise<ContainerTarget | null> {
  // safety check
  if (!isFromContainer) {
    return null;
  }

  return {
    image: (packageInfo as any).image || packageInfo.name,
  };
}
