/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FloatingCTAProps {
  page: 'tetovalas' | 'sminktetovalas' | 'sminkkepzes';
}

export default function FloatingCTA({ page }: FloatingCTAProps) {
  const scrollToForm = () => {
    const anchorId = page === 'sminkkepzes'
      ? 'academy-form-anchor'
      : 'lead-form-anchor';
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return null;
}
